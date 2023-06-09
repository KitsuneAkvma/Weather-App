import styled from 'styled-components';
import { colors, lightTextColors } from '../../utility/Themes/variables';

export const StyledLocationsPage = styled.section`
  position: relative;
  width: 100vw;
  padding-top: 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 2rem;
  .title {
    width: 100%;

    border-bottom: 1px solid ${colors.primaryLight};
    text-align: center;
  }

  .button--go-back {
    position: absolute;
    top: 1.2rem;
    left: 0;
  }
  .edit-buttons {
    position: fixed;
    bottom: 1.8rem;
    right: 2rem;
    z-index: 2;

    display: flex;
    gap: 2rem;
  }
  .button--add,
  .button--edit,
  .button--close-edit {
    background-color: ${colors.primary};

    &:hover {
      background-color: ${colors.primaryHover};
    }
  }

  .locations-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    &__item__title {
      padding-left: 5vw;
      margin-bottom: 0.2rem;
    }
  }

  .saved-locations-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding-bottom: 3rem;
    color: ${lightTextColors.text3};
    &--empty {
      padding-top: 1rem;
      align-self: center;
    }
  }
  .location-card {
    height: 6.4rem;
    border-radius: 1rem;
    background-color: ${lightTextColors.text5};
  }
`;
