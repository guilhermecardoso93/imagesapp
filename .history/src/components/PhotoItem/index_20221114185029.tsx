import { Container } from "./styles";

type PhotoItemProps = {
  name: string,
  url: string,
}

export function PhotoItem({url, name} : PhotoItemProps) {
  return (
    <Container>
      <img src={url} alt='' className='imageURl'/>
      <p>{name}</p>
    </Container>
  )
}