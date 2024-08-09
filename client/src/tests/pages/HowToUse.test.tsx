import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HowToUse } from "../pages/HowToUse";

describe("HowToUse", () => {
    test("renders default page", () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <HowToUse />
            </MemoryRouter>
        );

        expect(screen.getByText("How to Use")).toBeInTheDocument();
        expect(screen.getByText("Training Materials")).toBeInTheDocument();
        expect(screen.getByText("Materials Needed")).toBeInTheDocument();
        expect(screen.getByText("Progress Monitoring")).toBeInTheDocument();
    });

    test("renders training materials page", () => {
        render(
            <MemoryRouter initialEntries={["/training-materials"]}>
                <HowToUse />
            </MemoryRouter>
        );

        expect(screen.getByText("Training Materials")).toBeInTheDocument();
    });

    test("renders materials needed page", () => {
        render(
            <MemoryRouter initialEntries={["/materials-needed"]}>
                <HowToUse />
            </MemoryRouter>
        );

        expect(screen.getByText("Materials")).toBeInTheDocument();
        expect(screen.getByText("Session Guides")).toBeInTheDocument();
        expect(screen.getByText("Guided Play Materials")).toBeInTheDocument();
    });

    test("renders progress monitoring page", () => {
        render(
            <MemoryRouter initialEntries={["/progress-monitoring"]}>
                <HowToUse />
            </MemoryRouter>
        );

        expect(screen.getByText("Progress Monitoring")).toBeInTheDocument();