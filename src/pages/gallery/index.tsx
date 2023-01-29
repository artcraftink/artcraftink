import { graphql, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import { flatten } from 'lodash';
import * as React from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import { Column, Row } from '../../components/grid';
import { Page } from '../../components/page';
import './index.scss';

export interface ImageNode {
  relativePath: string;
  name: string;
  childImageSharp: {
    fluid: FluidObject;
  };
}

export interface ImgData {
  images: {
    edges: {
      node: ImageNode;
    }[];
  };
}

const getImageName = (imageNodeName: string) => {
  return imageNodeName.split('_')[1];
};

const generateImageColumns = (images: { node: ImageNode }[]) => {
  const chunks: { node: ImageNode }[][] = [[], [], [], []];
  let nth = 0;
  for (let index = 0; index < images.length; index++) {
    if (nth === 0) {
      chunks[0].push(images[index]);
    }
    if (nth === 1) {
      chunks[1].push(images[index]);
    }
    if (nth === 2) {
      chunks[2].push(images[index]);
    }
    if (nth === 3) {
      chunks[3].push(images[index]);
      nth = 0;
    } else {
      nth++;
    }
  }
  return chunks;
};

const Gallery = () => {
  const data = useStaticQuery<ImgData>(graphql`
    query {
      images: allFile(filter: { relativeDirectory: { eq: "gallery" } }, sort: { fields: name, order: DESC }) {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const chunkSize = Math.ceil(data.images.edges.length / 4);
  const imageColumnsToRender = generateImageColumns(data.images.edges);
  const galleryImages = flatten(imageColumnsToRender).map((image) => {
    return {
      title: getImageName(image.node.name),
      node: image.node,
    };
  });
  const galleryImageSources = galleryImages.map((image) => image.node.childImageSharp.fluid.src);

  const [galleryIndex, setGalleryIndex] = React.useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = React.useState(false);
  const prevIndex = galleryIndex - (1 % galleryImageSources.length);
  const nextIndex = (galleryIndex + galleryImageSources.length + 1) % galleryImageSources.length;

  const renderImages = () => {
    return imageColumnsToRender.map((imageChunk, chunkIndex) => {
      return (
        <Column key={chunkIndex} spanXl={3} spanLg={4} spanMd={6} spanSm={12}>
          {imageChunk.map((edge, imageIndex) => {
            const imageNode = edge.node;
            const imageName = getImageName(imageNode.name);
            const galleryIndex = chunkIndex * chunkSize + imageIndex;
            return (
              <div
                key={galleryIndex}
                className="aci-Gallery__image"
                onClick={() => {
                  setIsGalleryOpen(true);
                  setGalleryIndex(galleryIndex);
                }}
              >
                <Img
                  alt={imageName}
                  fluid={imageNode.childImageSharp.fluid}
                  imgStyle={{ objectFit: 'contain' }}
                  fadeIn={true}
                />
                <div className="aci-Gallery__image-overlay">
                  <div className="aci-Gallery__image-overlay-text">{imageName}</div>
                </div>
              </div>
            );
          })}
        </Column>
      );
    });
  };

  return (
    <Page>
      {(_data) => (
        <>
          <Row className="aci-Gallery">
            <Column className="aci-Gallery__title">Gallery</Column>
            <Column>
              <Row>{renderImages()}</Row>
            </Column>
          </Row>
          {isGalleryOpen && (
            <Lightbox
              mainSrc={galleryImageSources[galleryIndex]}
              nextSrc={galleryImageSources[nextIndex]}
              prevSrc={galleryImageSources[prevIndex]}
              onCloseRequest={() => {
                setIsGalleryOpen(false);
              }}
              onMovePrevRequest={() => setGalleryIndex(prevIndex)}
              onMoveNextRequest={() => setGalleryIndex(nextIndex)}
              imageTitle={galleryImages[galleryIndex].title}
              imageLoadErrorMessage="Image loading failed! Try to reload."
            />
          )}
        </>
      )}
    </Page>
  );
};

export default Gallery;
