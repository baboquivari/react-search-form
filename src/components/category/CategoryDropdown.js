import React from 'react';
import styled from 'styled-components';

// TODO: Export all this CSS when done? Or place at bottom?
// TODO: The scrolling div of this Dropdown needs work.
const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 450px; */
  width: 450px;
  border-radius: 5px 5px 5px 5px;
  position: absolute;
  margin-top: 44px;
  width: 100%;
  background-color: white;
  user-select: none;
`
const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 0 1 auto;
`
const Categories = styled.div`
  display: flex;
  flex: 2 0;
`
const CategoriesScroll = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: scroll;
`
const HeadingText = styled.p`
  margin: 8px;
  border: solid gold 1px;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0;
`
const ColumnItem = styled.div`
  margin: 0;
`
const OtherCategory = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 50px;
`
const Item = styled.div`
  width: 50%;
`
const Button = styled.a`
  color: #4D9092;
  cursor: pointer;
  font-size: 15px;
  padding-right: 12px;
  padding-top: 10px;
`
const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto auto auto auto auto auto auto auto;
  font-size: 12px;
  padding-left: 10px;
  padding-top: 10px;
  border-bottom: 1px solid grey;
`
const Category = styled.div`
  height: 42px;
  padding-top: 7px;
`
const MoreCategories = styled.div`
  height: 50px;
  grid-column: 1 / span 2;
  padding-top: 10px;
  border-bottom: 1px solid grey;
  height: 35px;
`
const Detail = styled.p`
  display: inline;
  /* font-size: 15px; */
`
const CheckBox = styled.input`
  margin-right: 6px;
`
const MoreCategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto auto auto auto auto auto auto auto auto auto;
  font-size: 12px;
  overflow-y: auto;
  height: 145px;
  padding-left: 10px;
  padding-top: 10px;
`
const TopCategories = styled.div`
display: flex;
  justify-content: space-around;
  height: 40px;
  grid-column: 1 / span 2;
  border-bottom: 1px solid grey;
`
const Text = styled.p`
  display: inline;
  flex-grow: 1;
  padding-left: 12px;
  font-weight: bold;
  margin-bottom: 3px;
  margin: 0;
    padding-top: 10px;
`

const CategoryDropdown = props => {
  const { categories, handleCheckboxSelect } = props;

  const createCategories = type => {
    return categories.map((category, i) => {
        return category.type === type && (
          <Category key={i}>
            <CheckBox type="checkbox" onChange={handleCheckboxSelect.bind(null, category.name)}/>
            <Detail>{category.name} ({category.value})</Detail>
          </Category>
        )
    })
  }

  return (
    <Container>
        <TopCategories>
          <Text>Top Categories</Text>
          <Button>Search in all categories</Button>
        </TopCategories>
        <CategoriesGrid>
          { createCategories('top') }
        </CategoriesGrid>

        <MoreCategories><Text>More Categories</Text></MoreCategories>
        <MoreCategoriesGrid>
            { createCategories('more') }
        </MoreCategoriesGrid>
    </Container>
  );
};
{/* <Button>Search in all categories</Button> */}

CategoryDropdown.propTypes = {};

export default CategoryDropdown;

