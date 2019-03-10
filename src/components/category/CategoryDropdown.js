import React from 'react';
import styled from 'styled-components';

// TODO: Export all this CSS when done? Or place at bottom?
// TODO: The scrolling div of this Dropdown needs work.
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 450px;
  width: 450px;
  border-radius: 5px;
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
  justify-content: space-evenly;
  border: solid pink 1px;
  flex: 1 0;
`
const ColumnItem = styled.div`
  margin: 0;
  border: dashed orange 1px;
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
`
const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto auto auto auto auto auto auto auto;
  font-size: 12px;
`
const Category = styled.div`
  border: solid pink 1px;
  height: 50px;
`
const Detail = styled.p`
  display: inline;
`
const CheckBox = styled.input`
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
        <Heading>
            <HeadingText>Top Categories</HeadingText>
            <Button>Search in all Categories</Button>
        </Heading>
        <CategoriesGrid>
          { createCategories('top') }
        </CategoriesGrid>
        <Heading>
            <HeadingText>More Categories</HeadingText>
        </Heading>
        <CategoriesGrid>
          { createCategories('more') }
        </CategoriesGrid>
    </Container>
  );
};

CategoryDropdown.propTypes = {};

export default CategoryDropdown;

// TODO: CSS
// .container {
//   display: flex;
//   flex-direction: column;
//   height: 450px;
//   width: 450px;
//   border: solid #cbcbcb 3px;
//   border-radius: 5px;
// }
// .heading {
//   display: flex;
//   justify-content: space-between;
//   border: solid blue 1px;
//   flex: 0 1 auto;
// }
// .categories {
//   display: flex;

//   flex: 2 0;
//   border: solid green 1px;
// }
// .heading-text {
  // margin: 8px;
  // border: solid gold 1px;
// }
// .col {
  // display: flex;
  // flex-direction: column;
  // justify-content: space-evenly;
  // border: solid pink 1px;
  // flex: 1 0;
// }
// .col-item {
  // margin: 0;
  // border: dashed orange 1px;
// }
// .scroll {
  // display: flex;
  // flex-direction: row;
  // flex-wrap: wrap;
  // overflow-y: scroll;
// }
// .other-category {
  // display: flex;
  // flex-wrap: wrap;
  // height: 50px;
// }
// .item {
  // width: 50%;
  // border: solid olivedrab 1px;
// }
