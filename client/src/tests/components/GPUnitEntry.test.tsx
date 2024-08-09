import React from "react";
import { render, screen } from "@testing-library/react";
import { GPUnitEntry, GPUnitEntryProps } from "../../components/GPUnitEntry";

describe("GPUnitEntry", () => {
  const sessions: GPUnitEntryProps["sessions"] = [
    {
      name: "Session 1",
      objective: "Objective 1",
      pdf: "session1.pdf",
    },
    {
      name: "Session 2",
      objective: "Objective 2",
      pdf: "session2.pdf",
    },
  ];

  it("renders the unit name", () => {
    const unitName = "Unit 1";
    render(<GPUnitEntry name={unitName} sessions={sessions} />);
    expect(screen.getByText(unitName)).toBeInTheDocument();
  });

  it("renders the session entries", () => {
    render(<GPUnitEntry name="Unit 1" sessions={sessions} />);
    sessions.forEach((session) => {
      expect(screen.getByText(session.name)).toBeInTheDocument();
      expect(screen.getByText(session.objective)).toBeInTheDocument();
      expect(screen.getByText(session.pdf)).toBeInTheDocument();
    });
  });
});