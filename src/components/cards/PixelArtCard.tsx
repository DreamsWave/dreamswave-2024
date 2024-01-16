import Card from "../Card";

type PixelArtCardProps = {
  rightSide?: boolean;
  isMobile?: boolean;
};
function PixelArtCard({
  rightSide = false,
  isMobile = false,
}: PixelArtCardProps) {
  return (
    <Card title="Пиксель-арт" rightSide={rightSide} isMobile={isMobile}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Quis reiciendis
      eligendi placeat a tempore consequuntur natus, iure dolor necessitatibus!
      Tenetur quas sapiente adipisci dolorem odio, nostrum quae unde voluptatem
      illo! pariatur?
    </Card>
  );
}

export default PixelArtCard;
