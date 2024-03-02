import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";
import '@testing-library/jest-dom/extend-expect'
describe('App', () =>{
    it('Renders hello world', () =>{
        render(<App />);
        expect(screen.getByRole('heading',{
            level: 1,
        })
        )
    });

    })