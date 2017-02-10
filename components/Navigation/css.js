import { css } from 'glamor'

export const nav = css({
  width: '100%',
  padding: '1em 0',
  backgroundColor: 'rgba(10, 120, 40, .2)',
  color: 'white'
})

export const ul = css({
  margin: 0,
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center'
})

export const li = css({
  listStyle: 'none'
})

export const link = css({
  color: 'rgb(20,20,20)',
  fontSize: '1.5em',
  textDecoration: 'none',
  fontVariant: 'small-caps',
  ':hover': {
    textDecoration: 'underline'
  }
})