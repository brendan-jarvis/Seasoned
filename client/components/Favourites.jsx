import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { getFavourites, removeFavouriteAction, editFavourite } from '../actions'
import DeleteIcon from '@mui/icons-material/Delete'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import {
  Container,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Typography,
  Rating,
} from '@mui/material'

function Favourites() {
  const favourites = useSelector((state) => state.favourites)
  const user = useSelector((state) => state.loggedInUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFavourites(user.auth0Id))
  }, [user.auth0Id])

  return (
    <>
      <IfAuthenticated>
        <TableContainer
          component={Paper}
          sx={{
            margin: '0 auto',
            width: {
              xs: '90%',
              sm: '90%',
              md: '75%',
              lg: '50%',
              xl: '40%',
            },
          }}
        >
          <Table aria-label="Favourites table">
            <TableHead>
              <TableRow>
                <TableCell width="33%" align="center" vertical-align="top">
                  <Typography variant="h5" color="inherit" gutterBottom>
                    Name
                  </Typography>
                </TableCell>
                <TableCell
                  width="33%"
                  variant="h1"
                  align="center"
                  color="inherit"
                >
                  <Typography variant="h5" color="inherit" gutterBottom>
                    Done
                  </Typography>
                </TableCell>
                <TableCell
                  width="33%"
                  variant="h1"
                  align="center"
                  color="inherit"
                >
                  <Typography variant="h5" color="inherit" gutterBottom>
                    Rating
                  </Typography>
                </TableCell>
                <TableCell
                  width="33%"
                  variant="h1"
                  align="center"
                  color="inherit"
                >
                  <Typography variant="h5" color="inherit" gutterBottom>
                    Delete
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {favourites?.map((favourite) => (
                <TableRow key={favourite.id}>
                  <TableCell align="center">
                    <Link
                      variant="body3"
                      color="inherit"
                      textAlign="center"
                      target="_blank"
                      href={favourite.url}
                      rel="noreferrer"
                      underline="hover"
                    >
                      {favourite.label}{' '}
                      <OpenInNewIcon color="inherit" fontSize="inherit" />
                    </Link>
                  </TableCell>

                  <TableCell align="center">
                    <Checkbox
                      size="large"
                      checked={Boolean(favourite.done)}
                      onChange={() =>
                        dispatch(
                          editFavourite(favourite.id, {
                            ...favourite,
                            done: !favourite.done,
                          })
                        )
                      }
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Rating
                      precision={0.5}
                      name="rating"
                      value={favourite.rating}
                      onChange={(event, newValue) => {
                        dispatch(
                          editFavourite(favourite.id, {
                            ...favourite,
                            rating: newValue,
                          })
                        )
                      }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <DeleteIcon
                      size="large"
                      underline="hover"
                      onClick={() =>
                        dispatch(
                          removeFavouriteAction(favourite.id, user.auth0Id)
                        )
                      }
                    ></DeleteIcon>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <Container>
          <Typography variant="body2" align="center">
            Please sign in to see your favourites!
          </Typography>
        </Container>
      </IfNotAuthenticated>
    </>
  )
}

export default Favourites
