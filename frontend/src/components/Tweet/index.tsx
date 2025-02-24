import React from 'react';

import {
    Container,
    Retweeted,
    RetweetFixed,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
        <Retweeted>
            <RetweetFixed />
            Você retweetou
        </Retweeted>

        <Body>
            <Avatar />

            <Content>
                <Header>
                    <strong>Henry Loiola</strong>
                    <span>@henryloiola</span>
                    <Dot />
                    <time>14 de fev</time>
                </Header>

                <Description>Sextouu!!! 🥳</Description>

                <ImageContent />

                <Icons>
                    <Status>
                        <CommentIcon />
                        25
                    </Status>
                    <Status>
                        <RetweetIcon />
                        22
                    </Status>
                    <Status>
                        <LikeIcon />
                        194
                    </Status>
                </Icons>
            </Content>
        </Body>
    </Container>
  );
};

export default Tweet;