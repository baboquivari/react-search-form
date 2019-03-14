import React from 'react';

// CSS
import {
  Container,
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
  const { categories, selectedCategories, allSelected, handleCheckboxSelect, handleSelectAllCategories } = props;

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
            { createCategories('more', allSelected) }
        </MoreCategoriesGrid>
    </Container>
  );
};

export default CategoryDropdown;
