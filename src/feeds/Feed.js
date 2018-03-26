import React, { Component } from "react";
import load from "./loader";
import styled from "styled-components";

const FeedItem = styled.a`
  width: 100%;
  display: block;
  padding: 1em 0;
`;

const Mark = styled.span`
  display: inline-block;
  font-weight: bold;
  text-align: center;
  padding: 0.2em;
  border-radius: 4px;
  width: 4em;
  background: ${props => props.bgColor};
  color: ${props => props.color || "#fff"};
  margin: 0 0.5em;
  text-decoration: none;
`;

const Title = styled.span`
  font-weight: bold;
`;
const Time = styled.div`
  padding-left: 0.5em;
`;
const Link = styled.a`
  display: block;
  color: #333;
  :visited: {
    color: #333:
  }
`;
const Feed = ({ title, link, date, media, bgColor, color }) => {
  return (
    <FeedItem>
      <Link href={link}>
        <Mark bgColor={bgColor} color={color}>
          {media}
        </Mark>
        <Title>{title}</Title>
      </Link>
      <div>
        <Time>{date.toString()}</Time>
      </div>
    </FeedItem>
  );
};

export default class Feeds extends Component {
  state = {
    feeds: []
  };
  componentDidMount() {
    load().subscribe(feeds => {
      this.setState({
        feeds
      });
    });
  }
  render() {
    console.log(this.state.feeds);
    // return null;
    return this.state.feeds.map((item, i) => <Feed key={i} {...item} />);
  }
}
