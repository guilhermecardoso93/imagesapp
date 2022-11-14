import { useEffect, useState } from "react";
import { Area, Container, Header, ScreenWaring, PhotoList } from "./App.styles";
import * as Photos from "./services/photos";
import { PhotoTypes } from "./types/photoTypes";

export function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<PhotoTypes[]>([]);

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      setPhotos(await Photos.getAll());
      setLoading(false);
    };
    getPhotos();
  }, []);

  return (
    <Container>
      <Area>
        <Header>Galeria de Fotos</Header>
        {loading && (
          <ScreenWaring>
            <div className="emoji">🤚</div>
            <div>Carregando...</div>
          </ScreenWaring>
        )}
        {!loading && photos.length > 0 && (
          <PhotoList>
            {photos.map((photo) => (
              <div>{photo.name}</div>
            ))}
          </PhotoList>
        )}
        {!loading && photos.length === 0 && (
          <ScreenWaring>
            <div className="emoji">🙃</div>
            <div>Não há fotos disponiveis...</div>
          </ScreenWaring>
        )}
      </Area>
    </Container>
  );
}
