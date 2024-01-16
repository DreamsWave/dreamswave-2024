import Card from "../Card";

type SkillsCardProps = {
  rightSide?: boolean;
  isMobile?: boolean;
};
function SkillsCard({ rightSide = false, isMobile = false }: SkillsCardProps) {
  return (
    <Card title="Навыки" rightSide={rightSide} isMobile={isMobile}>
      <ul>
        <li>JavaScript - 4</li>
        <li>HTML - 5</li>
        <li>CSS - 5</li>
        <li>JavaScript - 4</li>
        <li>HTML - 5</li>
        <li>CSS - 5</li>
        <li>JavaScript - 4</li>
        <li>HTML - 5</li>
        <li>CSS - 5</li>
      </ul>
    </Card>
  );
}

export default SkillsCard;
