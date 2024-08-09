import { render, screen } from "@testing-library/react";
import { FAQEntry } from "../../components/FAQEntry";

test("renders FAQEntry component with question and answer", () => {
  const question = "What is Lorem Ipsum?";
  const answer = "Lorem ipsum dolor sit amet...";

  render(<FAQEntry question={question} answer={answer} />);

  const questionElement = screen.getByText(question);
  const answerElement = screen.getByText(answer);

  expect(questionElement).toBeInTheDocument();
  expect(answerElement).toBeInTheDocument();
});