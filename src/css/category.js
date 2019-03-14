import styled from 'styled-components';

// CategorySearchBar
export const SearchBar = styled.div`
  margin-left: 30px;
  width: 442px;
  display: flex;
  position: relative;
`

export const EnterKeywordSearchField = styled.div`
  display: flex;
  flex: 1 1 0;
`

export const Input = styled.input`
  flex-grow: 1;
  font-size: 15px;
  border: none;
  border-radius: 5px 0 0 5px;
  padding-left: 12px;
`

export const InAllCategoriesButton = styled.div`
  flex: 1 1 0;
  background-color: white;
  border-radius: 0px 5px 5px 0;
  cursor: pointer;
  background-color: #EBEBEB;
`

export const ButtonText = styled.p`
  margin: 0;
  font-size: 15px;
  padding: 11px;
`

// CategoryDropdown
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  border-radius: 5px 5px 5px 5px;
  position: absolute;
  margin-top: 44px;
  width: 100%;
  background-color: white;
  user-select: none;
`

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 0 1 auto;
`

export const Categories = styled.div`
  display: flex;
  flex: 2 0;
`

export const CategoriesScroll = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: scroll;
`

export const HeadingText = styled.p`
  margin: 8px;
  border: solid gold 1px;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0;
`

export const ColumnItem = styled.div`
  margin: 0;
`

export const OtherCategory = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 50px;
`

export const Item = styled.div`
  width: 50%;
`

export const Button = styled.a`
  color: #4D9092;
  cursor: pointer;
  font-size: 15px;
  padding-right: 12px;
  padding-top: 10px;
`

export const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto auto auto auto auto auto auto auto;
  font-size: 12px;
  padding-left: 10px;
  padding-top: 10px;
  border-bottom: 1px solid grey;
`

export const Category = styled.div`
  height: 42px;
  padding-top: 7px;
`

export const MoreCategories = styled.div`
  height: 50px;
  grid-column: 1 / span 2;
  padding-top: 10px;
  border-bottom: 1px solid grey;
  height: 35px;
`

export const Detail = styled.p`
  display: inline;
`

export const CheckBox = styled.input`
  margin-right: 6px;
`

export const MoreCategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto auto auto auto auto auto auto auto auto auto;
  font-size: 12px;
  overflow-y: auto;
  height: 145px;
  padding-left: 10px;
  padding-top: 10px;
`

export const TopCategories = styled.div`
  display: flex;
  justify-content: space-around;
  height: 40px;
  grid-column: 1 / span 2;
  border-bottom: 1px solid grey;
`

export const Text = styled.p`
  display: inline;
  flex-grow: 1;
  padding-left: 12px;
  font-weight: bold;
  margin-bottom: 3px;
  margin: 0;
  padding-top: 10px;
`
