import React from 'react';

import Feed from '../Feed';

import { 
    Container,
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
    EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar />
        </Banner>

        <ProfileData>
            <EditButton outlined>Editar perfil</EditButton>

            <h1>Henry Loiola</h1>
            <h2>@henryloiola</h2>

            <p>
                Developer at <a href="https://ebaconline.com.br/">@EBAC</a>
            </p>

            <ul>
                <li>
                    <LocationIcon />
                    Rio de Janeiro, Brasil
                </li>
                <li>
                    <CakeIcon />
                    Nascidoa(a) em 02 de fevereiro de 2005
                </li>
            </ul>

            <Followage>
            <span>
                seguindo <strong>101</strong>
            </span>
            <span>
                <strong>302 </strong> seguidores
            </span>
            </Followage>
        </ProfileData>

        <Feed />
    </Container>
  );
};

export default ProfilePage;