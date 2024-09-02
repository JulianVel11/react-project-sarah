const cardContent = [
  {
    cardId: 1,
    cardTittle: "Ongoing",
    cardText: "Coaching",
    cardBtn: "Learn More",
  },
  {
    cardId: 2,
    cardTittle: "Deep Dive",
    cardText: "Intensive",
    cardBtn: "Learn More",
  },
];

export default function WorkCard() {
  return cardContent.map((card) => (
    <div className="work-card" key={card.cardId}>
      <span>{card.cardTittle}</span>
      <h3>{card.cardText}</h3>
      <button>{card.cardBtn}</button>
    </div>
  ));
}
