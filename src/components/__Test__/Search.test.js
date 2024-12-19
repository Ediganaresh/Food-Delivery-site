import Body from "../Body";
// import { act } from "react-dom/test-utils";
import {act} from "react";
import { fireEvent,render,screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/resListMockData.json"
import "@testing-library/jest-dom";

global.fetch=jest.fn(()=>{
       return Promise.resolve({
        json:()=>{
           return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should Search the ResList foe Burger",async ()=>{
    await act ( async ()=>{
        render(
            <BrowserRouter>
            <Body/>
            </BrowserRouter>
        )
    }
    
);
    const SearchBtn=screen.getByRole("button",{name:"Search"});
    const searchInput = screen.getByTestId("searchInput")
// fireevent is provided by jest which is used to perform the ev
    fireEvent.change(searchInput,{target:{value:"burger"}}) // ch
    fireEvent.click(SearchBtn)
    const searchCards = screen.getAllByTestId("resCard") // get the
    expect(searchCards.length).toBe(3) // click the search button

});


