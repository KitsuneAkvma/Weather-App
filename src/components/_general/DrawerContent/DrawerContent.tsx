import { StyledDrawerContent } from './DrawerContent.styled';
import PlaceIcon from '@mui/icons-material/Place';
import { Box, Button, Typography } from '@mui/material';

import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import AddLocationRoundedIcon from '@mui/icons-material/AddLocationRounded';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectSessionFavoriteLocation,
  selectSessionLocations,
} from '../../../Redux/selectors';
import { IWeatherData } from '../../../Redux/Slices/WeatherSlice/types';
import { useTempUnits } from '../../../utility/hooks/useTempUnit';
import { TSavedLocations } from '../../../Redux/Slices/SessionSlice/types';

export const DrawerContent = () => {
  const favoriteLocation: IWeatherData = useSelector(
    selectSessionFavoriteLocation
  );
  const savedLocations: TSavedLocations = useSelector(selectSessionLocations);
  const doesSavedLocationExist: boolean = savedLocations.length > 0;
  const { location: favLocation } = favoriteLocation;
  const favTemp = useTempUnits('current', favoriteLocation);

  return (
    <StyledDrawerContent>
      <Link to="/settings" className="settings">
        {' '}
        <SettingsRoundedIcon className="setting__icon" />
      </Link>
      <ul className="localizations">
        <li className="localizations__item">
          <span className="localizations__item__section-name">
            {' '}
            <StarRoundedIcon className="localizations__item__section-name__icon" />
            <Typography
              variant="h5"
              className="localizations__item__section-name__text"
            >
              Favorite location
            </Typography>
          </span>
          <Box className="favorites__item">
            {' '}
            <span className="favorites__item__name">
              <PlaceIcon className="favorites__item__name__icon" />
              <Typography className="favorites__item__name__text">
                {favLocation.name}
              </Typography>
            </span>{' '}
            <Box className="saved-localizations__item__info">
              <img
                src={favoriteLocation.current.condition.icon}
                alt="weather icon"
                className="saved-localizations__item__info__icon"
              />{' '}
              <Typography className="saved-localizations__item__info__temp">
                {favTemp}
              </Typography>
            </Box>
          </Box>
        </li>{' '}
        <div className="separator" />{' '}
        <li className="localizations__item">
          {' '}
          <span className="localizations__item__section-name">
            {' '}
            <AddLocationRoundedIcon className="localizations__item__section-name__icon" />
            <Typography
              variant="h5"
              className="localizations__item__section-name__text"
            >
              Saved locations
            </Typography>
          </span>
          {doesSavedLocationExist ? (
            <ul className="saved-localizations">
              <li className="saved-localizations__item">
                <span className="saved-localizations__item__name">
                  <PlaceIcon className="saved-localizations__item__name__icon" />
                  <p className="saved-localizations__item__name__text"></p>
                </span>
                <Box className="saved-localizations__item__info">info</Box>
              </li>{' '}
            </ul>
          ) : (
            <Typography variant="body2" className="saved-localizations">
              No location saved
            </Typography>
          )}
        </li>{' '}
        <div className="separator" />
      </ul>{' '}
      <Link to="/locations" className="menage-link">
        <Button variant="contained" className="menage-link__button">
          Menage Locations
        </Button>
      </Link>
    </StyledDrawerContent>
  );
};
