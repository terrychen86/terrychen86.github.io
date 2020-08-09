// @flow strict

import * as React from 'react';
import styled from 'styled-components';

import { H4 } from 'components/styled-elements/fonts';

import * as colors from 'utils/colors';
import mediaQuery from 'utils/media-query';
import { rgba } from 'utils/rgba';

const CardWrapper: React$ComponentType<*> = styled.div`
  position: relative;
  display: inline-block;
  width: 260px;
  box-shadow: 0 8px 15px ${rgba(colors.black, 0.1)};
  transition: all 0.2s linear;
  margin-bottom: 35px;

  ${mediaQuery.below('sm')} {
    width: 100%;
    opacity: 0.95;
  }
`;

type HeadingProps = {|
  +colorId: number,
  +children: React.Node,
|};

const headingBgColorsSet = {
  '0': '#40a1e4',
  '1': '#00bdeb',
  '2': '#00d5d9',
  '3': '#ffb122',
  '4': '#db7ca7',
  '5': '#7aa1d2',
  '6': '#61ad63',
  '7': '#ffd76c',
};

const Heading: React$ComponentType<HeadingProps> = styled.div`
  position: relative;
  height: 150px;
  background-color: ${(props) => headingBgColorsSet[props.colorId.toString()] || headingBgColorsSet['0']};
`;

const Title: React$ComponentType<*> = styled(H4)`
  color: ${colors.white};
  text-align: center;
  padding-top: 20px;
`;

type ThumbnailProps = {|
  +imgSrc: string,
|};

const Thumbnail: React$ComponentType<ThumbnailProps> = styled.div`
  position: absolute;
  left: 50%;
  bottom: 15%;
  transform: translate(-50%, 50%);
  height: 125px;
  width: 125px;
  background-image: url(${(props) => props.imgSrc});
  background-size: cover;
  background-position: center;
  border-radius: 100%;
  border: 5px solid white;
  z-index: 3;
`;

const Description: React$ComponentType<*> = styled.div`
  position: relative;
  padding: 20px;
  background: ${colors.white};
`;

const TagsContainer: React$ComponentType<*> = styled.div`
  margin-top: 30px;
  height: 150px;
  text-align: left;
`;

const Tag: React$ComponentType<*> = styled.span`
  display: inline-block;
  margin: 2px;
  font-size: 12px;
  padding: 0 10px;
  border: 1px solid ${rgba(colors.deepGray, 0.6)};
  color: ${rgba(colors.deepGray, 0.8)};
  border-radius: 4px;
`;

const ButtonGroup: React$ComponentType<*> = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  height: 50px;
  text-align: right;
  padding: 0 20px;
  font-size: 28px;
`;

type IconProps = {|
  +className: string,
  +icon: 'github' | 'globe' | 'chrome',
|};

const Icon: React$ComponentType<IconProps> = styled.i`
  margin-left: 20px;
  opacity: 0.8;
  transition: all 0.25s linear;
  color: ${(props) =>
    ({
      github: '#333333',
      globe: '#3671bf',
      chrome: '#82ce55',
    }[props.icon])};

  &:hover {
    opacity: 1;
  }
`;

type Link = {
  icon?: any,
  link?: any,
};

type Props = {|
  +title: string,
  +imgSrc: string,
  +tags: Array<?string>,
  +links: Array<Link>,
  +colorId: number,
|};

const Card = ({ title, imgSrc, tags, links, colorId }: Props) => {
  return (
    <CardWrapper>
      <Heading colorId={colorId % Object.keys(headingBgColorsSet).length}>
        <Title>{title}</Title>
        <Thumbnail imgSrc={imgSrc} />
      </Heading>
      <Description>
        <TagsContainer>{tags.map((tag) => (tag == null ? null : <Tag key={tag}>{tag}</Tag>))}</TagsContainer>
      </Description>
      <ButtonGroup>
        {links.map((link) =>
          link.icon == null ? null : (
            <a key={link.icon} href={link.link} target="_blank" rel="noreferrer noopener">
              <Icon icon={link.icon} className={`fa fa-${link.icon}`} />
            </a>
          ),
        )}
      </ButtonGroup>
    </CardWrapper>
  );
};

export default Card;
