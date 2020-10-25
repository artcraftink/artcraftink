import { graphql, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import * as React from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { chunk } from 'lodash';

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

const Gallery = () => {
  const data = useStaticQuery<ImgData>(graphql`
    query {
      images: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
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

  const images: {
    title: string;
    node: ImageNode;
  }[] = [];

  // map image nodes
  data.images.edges.forEach((imageEdge) => {
    const imageNode = imageEdge.node;

    if (imageEdge) {
      images.push({
        title: imageNode.name,
        node: imageNode,
      });
    }
  });

  const imageSources = images.map((image) => image.node.childImageSharp.fluid.src);
  const [galleryIndex, setGalleryIndex] = React.useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = React.useState(false);
  const prevIndex = galleryIndex - (1 % imageSources.length);
  const nextIndex = (galleryIndex + imageSources.length + 1) % imageSources.length;

  const renderImages = () => {
    let numberOfChunks = Math.ceil(data.images.edges.length / 4);
    return chunk(data.images.edges, numberOfChunks).map((imageChunk, chunkIndex) => {
      return (
        <Column key={chunkIndex} spanXl={3} spanLg={6} spanMd={6} spanSm={12}>
          {imageChunk.map((edge, imageIndex) => {
            const imageNode = edge.node;
            return (
              <div
                key={chunkIndex * numberOfChunks + imageIndex}
                className="aci-Gallery__image"
                onClick={() => {
                  setIsGalleryOpen(true);
                  setGalleryIndex(chunkIndex * numberOfChunks + imageIndex);
                }}
              >
                <Img
                  alt={imageNode.name}
                  fluid={imageNode.childImageSharp.fluid}
                  imgStyle={{ objectFit: 'contain' }}
                  fadeIn={true}
                />
                <div className="aci-Gallery__image-overlay">
                  <div className="aci-Gallery__image-overlay-text">{imageNode.name}</div>
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
            <Row>{renderImages()}</Row>
          </Row>
          {isGalleryOpen && (
            <Lightbox
              mainSrc={imageSources[galleryIndex]}
              nextSrc={imageSources[nextIndex]}
              prevSrc={imageSources[prevIndex]}
              onCloseRequest={() => {
                setIsGalleryOpen(false);
              }}
              onMovePrevRequest={() => setGalleryIndex(prevIndex)}
              onMoveNextRequest={() => setGalleryIndex(nextIndex)}
              imageTitle={images[galleryIndex].title}
              imageLoadErrorMessage="Image loading failed! Try to reload."
            />
          )}
        </>
      )}
    </Page>
  );
};

export default Gallery;
