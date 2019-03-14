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
  const { categories, selectedCategories, allSelected, handleCheckboxSelect, handleButtonClick, handleSelectAllCategories } = props;

  const createCategories = (type, allSelected) => {
    return categories.map((category, i) => {
        return category.type === type &&
          <Category key={i}>
            <CheckBox
              checked={selectedCategories.includes(category.name) ? true : allSelected}
              type="checkbox"
              onChange={handleCheckboxSelect.bind(null, category.name)}
            />
            <Detail>{category.name} ({category.value})</Detail>
          </Category>
    })
  }

  return (
    <Container>
        <TopCategories>
          <Text>Top Categories</Text>
          <Button onClick={handleSelectAllCategories}>Search in all categories</Button>
        </TopCategories>
        <CategoriesGrid>
          { createCategories('top', allSelected) }
        </CategoriesGrid>

        <MoreCategories><Text>More Categories</Text></MoreCategories>
        <MoreCategoriesGrid>
            { createCategories('more') }
        </MoreCategoriesGrid>
    </Container>
  );
};

export default CategoryDropdown;
