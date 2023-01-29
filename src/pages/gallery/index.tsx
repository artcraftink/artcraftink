import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import * as React from 'react';
import { Gallery as Slideshow, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';

import { Column, Row } from '../../components/grid';
import { Page } from '../../components/page';
import { ScreenSize, useScreenSize } from '../../helpers/useScreenSize';
import './index.scss';

export interface ImageNode {
  relativePath: string;
  name: string;
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
    original: {
      width: number;
      height: number;
    };
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

const getNumberOfColumns = ({ isMobile, isTablet, isDesktop }: ScreenSize) => {
  if (isMobile) {
    return 1;
  } else if (isTablet) {
    return 2;
  } else if (isDesktop) {
    return 3;
  } else {
    return 4;
  }
};

const generateImageColumns = (images: { node: ImageNode }[], numberOfColumns: number) => {
  const columns: { node: ImageNode }[][] = [[], [], [], []];
  let currentColumn = 0;
  for (let index = 0; index < images.length; index++) {
    columns[currentColumn].push(images[index]);
    if (currentColumn === numberOfColumns - 1) {
      currentColumn = 0;
    } else {
      currentColumn++;
    }
  }
  return columns;
};

const Gallery = () => {
  const data = useStaticQuery<ImgData>(graphql`
    {
      images: allFile(filter: { relativeDirectory: { eq: "gallery" } }, sort: { fields: name, order: DESC }) {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
              original {
                width
                height
              }
            }
          }
        }
      }
    }
  `);

  const screenSize = useScreenSize();
  const numberOfColumns = getNumberOfColumns(screenSize);
  const columnsSize = Math.ceil(data.images.edges.length / numberOfColumns);
  const imageColumnsToRender = generateImageColumns(data.images.edges, numberOfColumns);

  const renderImages = () => {
    return imageColumnsToRender.map((imageChunk, chunkIndex) => {
      return (
        <Column key={chunkIndex} spanXl={3} spanLg={4} spanMd={6} spanSm={12}>
          {imageChunk.map((edge, imageIndex) => {
            const imageNode = edge.node;
            const imageName = getImageName(imageNode.name);
            const galleryIndex = chunkIndex * columnsSize + imageIndex;
            const originalSrc = imageNode.childImageSharp.gatsbyImageData.images.fallback?.src;
            const placeholderSrc = imageNode.childImageSharp.gatsbyImageData.placeholder?.fallback;
            const width = imageNode.childImageSharp.original.width;
            const height = imageNode.childImageSharp.original.height;
            return (
              <Item
                key={galleryIndex}
                caption={imageName}
                original={originalSrc}
                thumbnail={placeholderSrc}
                width={width}
                height={height}
              >
                {({ ref, open }) => (
                  <div
                    ref={ref as React.MutableRefObject<HTMLDivElement>}
                    className="aci-Gallery__image"
                    onClick={(e) => {
                      e.preventDefault();
                      open(e);
                    }}
                  >
                    <GatsbyImage
                      alt={imageName}
                      imgStyle={{ objectFit: 'contain' }}
                      image={imageNode.childImageSharp.gatsbyImageData}
                    />
                    <div className="aci-Gallery__image-overlay">
                      <div className="aci-Gallery__image-overlay-text">{imageName}</div>
                    </div>
                  </div>
                )}
              </Item>
            );
          })}
        </Column>
      );
    });
  };

  return (
    <Page>
      {() => (
        <>
          <Row className="aci-Gallery">
            <Column className="aci-Gallery__title">Gallery</Column>
            <Column>
              <Row>
                <Slideshow options={{ showHideOpacity: true }} withCaption>
                  {renderImages()}
                </Slideshow>
              </Row>
            </Column>
          </Row>
        </>
      )}
    </Page>
  );
};

export default Gallery;
