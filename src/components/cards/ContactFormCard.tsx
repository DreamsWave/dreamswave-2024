import Card from "../Card";

type ContactFormCardProps = {
  rightSide?: boolean;
  isMobile?: boolean;
};
function ContactFormCard({
  rightSide = false,
  isMobile = false,
}: ContactFormCardProps) {
  return (
    <Card title="Отправить сообщение" rightSide={rightSide} isMobile={isMobile}>
      <form>
        <label>
          Почта <input type="email" />
        </label>
        <br></br>
        <label>
          Сообщение <textarea></textarea>
        </label>
        <br />
        <button type="submit">Отправить</button>
      </form>
    </Card>
  );
}

export default ContactFormCard;
