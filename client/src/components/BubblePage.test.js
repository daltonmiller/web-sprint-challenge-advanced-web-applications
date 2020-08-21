import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Fetches data and renders the bubbles", () => {
  // Finish this test
  
  
});


// import React from 'react';
// import { render, wait } from '@testing-library/react'
// import userEvent from "@testing-library/user-event";
// import App from './App'

// import {fetchShow as mockFetchShow} from './api/fetchShow'
// import { episodeData } from './fixtures/episodeData'

// jest.mock('./api/fetchShow')

// test('App component renders without crash', () => {
//     mockFetchShow.mockResolvedValue({data: episodeData})
//     render(<App />)
// })



// test('Updates episodes list on dropdown change', async () => {
//     mockFetchShow.mockResolvedValue(episodeData)
//     const { getByText, getAllByText, queryAllByTestId } = render(<App />)

//     expect(queryAllByTestId('episode')).toHaveLength(0)

//     await wait() 
//     userEvent.click(getByText(/select a season/i))
//     userEvent.click(getByText(/season 1/i))

//     await wait()
//     expect(queryAllByTestId('episode')).toHaveLength(0)

// })