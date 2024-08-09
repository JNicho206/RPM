import React from "react";
import { render } from "@testing-library/react";
import { TeamMemberAboutEntry, TeamMemberAboutEntryProps } from "../../components/TeamMemberAboutEntry";

describe("TeamMemberAboutEntry", () => {
  const props: TeamMemberAboutEntryProps = {
    name: "John Doe",
    bio: "Lorem ipsum dolor sit amet",
    img: "https://example.com/image.jpg",
  };

  it("renders the component with correct props", () => {
    const { getByText, getByAltText } = render(<TeamMemberAboutEntry {...props} />);
    
    expect(getByAltText("Team member image")).toHaveAttribute("src", props.img);
    expect(getByText(props.bio)).toBeInTheDocument();
  });
});