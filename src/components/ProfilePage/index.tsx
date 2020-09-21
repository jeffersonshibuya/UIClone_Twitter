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
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Jefferson Shibuya</h1>
        <h2>@jefferson_shibuya</h2>

        <p>
          Developer at <a href="http://www.ipc-global.com">@IPC</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 8 de novembro de 1983
          </li>
        </ul>

        <Followage>
          <span>
            Seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed></Feed>
    </Container>
  );
};

export default ProfilePage;
