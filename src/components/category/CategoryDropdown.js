import React from 'react';
import styled from 'styled-components';

// TODO: Export all this CSS when done? Or place at bottom?
// TODO: The scrolling div of this Dropdown needs work.
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 450px;
  width: 450px;
  border: solid #cbcbcb 3px;
  border-radius: 5px;
`
const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  border: solid blue 1px;
  flex: 0 1 auto;
`
const Categories = styled.div`
  display: flex;
  flex: 2 0;
  border: solid green 1px;
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
  border: solid olivedrab 1px;
`


const CategoryDropdown = props => {
  return (
    <Container>
        <Heading>
            <HeadingText>Top Categories</HeadingText>
            <button>Search in all Categories</button>
        </Heading>
        <Categories>
            <Column>
                <ColumnItem>Stuff</ColumnItem>
                <ColumnItem>Stuff</ColumnItem>
                <ColumnItem>Stuff</ColumnItem>
                <ColumnItem>Stuff</ColumnItem>
            </Column>
            <Column>
                <ColumnItem>Stuff</ColumnItem>
                <ColumnItem>Stuff</ColumnItem>
                <ColumnItem>Stuff</ColumnItem>
                <ColumnItem>Stuff</ColumnItem>
            </Column>
        </Categories>
        <Heading>
            <HeadingText>More Categories</HeadingText>
        </Heading>
        <CategoriesScroll>
            <OtherCategory>
                <Item>Thing</Item>
                <Item>Thing</Item>
                <Item>Thing</Item>
                <Item>Thing</Item>
            </OtherCategory>
        </CategoriesScroll>
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
