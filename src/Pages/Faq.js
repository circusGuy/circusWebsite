import "../CSS/faq.css";

const questions_answers = [
  {
    Q: "How can I access my tickets after purchasing them?",
    A: "Your tickets will be emailed to you. You can print them or save the PDF to your phone for easy access.",
  },
  {
    Q: "Can tickets be purchased at the door?",
    A: "Yes, tickets can be purchased both online and in-person prior to the show.",
  },
  {
    Q: "Are there assigned seats?",
    A: "No, Seating is on a first come first serve basis. All seats have an equal view of the show.",
  },
  {
    Q: "Can we bring our own food?",
    A: "No, Outside food and drink is not permitted in the Circus. Food is available for purchase before and during the show.",
  },
  {
    Q: "How long is the show?",
    A: "The show is 1 hour and 30 minutes long.",
  },
  {
    Q: "How much are tickets?",
    A: "Tickets are $25.00 per adult and $15 per child.",
  },
];

function q_a_card(qObject) {
  return (
    <div class="qaCard">
        <div class="mb-2">
          <strong>Q: {qObject.Q}</strong>
        </div>
        <hr class="divider" />
        <div class="mt-2">
          <strong>A: </strong>
          <em>{qObject.A}</em>
        </div>
    </div>
  );
}

export default function Faq() {
  const cards = questions_answers.map((qa) => q_a_card(qa));

  return (
    <div class="page">
      <div class="subPage">
        <h1 class="titleText purp">Frequently Asked Questions</h1>

        {cards}
        <a href="/schedule" target="_self" class="tixBtn w-1/3 text-center">
          SEE THE SCHEDULE!!!
        </a>
      </div>
    </div>
  );
}
