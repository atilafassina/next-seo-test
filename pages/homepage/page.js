import React, { Component } from 'react'
import { connect } from 'react-redux'
import Head from 'next/head'
import Link from 'next/link'
import { css } from 'glamor'
import Giphy from '../../components/Footer/container'
import Header from '../../components/Header'
import Offer from '../../components/Offer/container'
import TagInput from '../../components/TagInput'
import BaseTemplate from '../BaseTemplate'

css.global('html, body', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'whitesmoke'
})

class Page extends Component {
  // getInitialProps() {
  //   return {}
  // }

  render(props) {
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="any other meta we may want" />
          <title>Simplesurance Test-Case</title>
        </Head>
        <Header />
        <BaseTemplate>
          <span>dois</span>
          <h1>bang</h1>
        </BaseTemplate>
        <Offer />
        <ul>
          <li><Link href='/page2'><a>page2</a></Link></li>
          <li><Link href='/test?id=last' as='/test/last'><a>My last test</a></Link></li>
        </ul>
        <Giphy />
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    type: state.type,
    hello: state.hello
  }
}

export default connect(
  mapStateToProps
)(Page);
