import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const cardsContents = [
  {
    card_number: 1,
    card_text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit amet consectetur, adipisicing elit",
  },
  {
    card_number: 2,
    card_text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit amet consectetur, adipisicing elit",
  },
  {
    card_number: 3,
    card_text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit amet consectetur, adipisicing elit",
  },
  {
    card_number: 4,
    card_text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit amet consectetur, adipisicing elit",
  },
  {
    card_number: 5,
    card_text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit amet consectetur, adipisicing elit",
  },
  {
    card_number: 6,
    card_text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit amet consectetur, adipisicing elit",
  },
];

export default function GoalCards() {
  return (
    <div className="goals-container">
      {cardsContents.map((card) => (
        <div className="goal" key={card.card_number}>
          <CheckCircleOutlineIcon />
          <p>{card.card_text}</p>
        </div>
      ))}
    </div>
  );
}
