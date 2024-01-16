import styled from "@emotion/styled";
import Masonry from "react-masonry-css";
import Card from "./Card";
import stringImage from "../assets/images/string.png";
import { useMediaQuery } from "react-responsive";

const PIXEL_SIZE = 5;

const GridWrapper = styled(Masonry)<{ isMobile?: boolean }>`
  display: flex;
  width: auto;
  max-width: ${234 * PIXEL_SIZE}px;
  margin: 0 auto;
  padding: ${2 * PIXEL_SIZE}px;
  position: relative;

  & .my-masonry-grid_column {
    width: ${100 * PIXEL_SIZE}px;
    background-clip: padding-box;
    padding-left: 0;
  }

  &:after {
    content: "";
    background-image: url(${stringImage});
    background-repeat: repeat-y;
    background-size: contain;
    width: ${14 * PIXEL_SIZE}px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

function Grid() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <GridWrapper
      isMobile={isTabletOrMobile}
      breakpointCols={2}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      <Card title="Обо мне">
        Привет! Меня зовут Алексей, и я Fullstack-разработчик с более чем
        десятилетним стажем в сфере ИТ. Меня увлекают все аспекты
        веб-технологий, и я умею создавать качественные и функциональные сайты и
        приложения. Моя специализация - это разработка интерфейсов, серверов,
        деплоев, тестов и автоматизации. Я работал над различными проектами, от
        простых сайтов-визиток до сложных административных систем и ботов. Я
        владею HTML, CSS, JavaScript/TypeScript и React, а также постоянно
        изучаю новые инструменты и технологии. Интересуюсь искусственным
        интеллектом и готов работать с ним при необходимости. В свободное время
        я люблю рисовать пиксель-арт, заниматься фитнесом и слушать
        разнообразную музыку. Я открыт для сотрудничества и новых вызовов,
        поэтому если вам нужен профессиональный и ответственный веб-разработчик,
        не стесняйтесь связаться со мной!
      </Card>
      <Card title="Навыки" side="right">
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
      <Card title="Опыт">
        <p>
          Сентябрь 2010 - Июль 2015 — Студент, Академия маркетинга и
          социально-информационных технологий - ИМСИТ.Cпециальность “Программное
          обеспечение вычислительной техники и автоматизированных систем”,
          квалификация “Инженер”.
        </p>
        <p>
          Сентябрь 2015 - Март 2017 — Верстальщик, фриланс. Разрабатывал
          веб-интерфейсы с использованием HTML, CSS и JavaScript.
        </p>
        <p>
          Март 2017 - Июль 2017 —Программист, ООО “Автопилот”. В рамках
          командной работы разрабатывал административные системы,
          соответствующие бизнес-процессам компании. Подключал эквайринговые
          сервисы к сайтам компании и обеспечивал техническую поддержку сайтов.
          Использовал HTML, SCSS, JavaScript, PHP, MySQL, Laravel.
        </p>
        <p>
          Июль 2017 - Настоящее время — Веб-разработчик, фриланс Разработка
          сайтов от идеи до запуска и поддержка их работоспособности. Также
          создал ботов для разных соцсетей и мессенджеров и кроссплатформенные
          приложения для разных устройств. Использовал React,
          JavaScript/TypeScript, Python и др.
        </p>
      </Card>
      <Card title="Отправить сообщение" side="right">
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
      <Card title="Пиксель-арт">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis reiciendis
        eligendi placeat a tempore consequuntur natus, iure dolor
        necessitatibus! Tenetur quas sapiente adipisci dolorem odio, nostrum
        quae unde voluptatem illo! pariatur?
      </Card>
      <Card title="card 6" side="right">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
        pariatur? Quis reiciendis eligendi placeat a tempore consequuntur natus,
        iure dolor necessitatibus! Tenetur quas sapiente adipisci dolorem odio,
        nostrum quae unde voluptatem illo! pariatur? Quis reiciendis eligendi
        placeat a tempore consequuntur natus, iure dolor necessitatibus! Tenetur
        quas sapiente adipisci dolorem odio, nostrum quae unde voluptatem illo!
        pariatur?
      </Card>
      <Card title="card 7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
        pariatur?
      </Card>
      <Card title="card 8" side="right">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
        pariatur? Quis reiciendis eligendi placeat a tempore consequuntur natus,
        iure dolor necessitatibus! Tenetur quas sapiente adipisci dolorem odio,
        nostrum quae unde voluptatem illo! pariatur?
      </Card>
      <Card title="card 9">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
        pariatur?
      </Card>
    </GridWrapper>
  );
}

export default Grid;
