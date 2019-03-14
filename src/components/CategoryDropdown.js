import React from 'react';

// CSS
import {
  Container,
  Heading,
  Categories,
  CategoriesScroll,
  HeadingText,
  Column,
  ColumnItem,
  OtherCategory,
  Item,
  Button,
  CategoriesGrid,
  Category,
  MoreCategories,
  Detail,
  CheckBox,
  MoreCategoriesGrid,
  TopCategories,
  Text
} from '../css/category';

const CategoryDropdown = props => {
  const { categories, handleCheckboxSelect, handleButtonClick } = props;

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
          <Button onClick={handleButtonClick}>Search in all categories</Button>
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

export default CategoryDropdown;

