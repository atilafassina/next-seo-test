import React, { Component } from 'react'
import Link from 'next/link'
import { nav, ul, li, link } from './css'

export default class Navigation extends Component {
  render() {
    return (
      <nav className={nav}>
          <ul className={ul}>
            <li className={li}><Link href='/prepare-it'><a className={link}>prepare it</a></Link></li>
            <li className={li}><Link href='/mate?id=hot' as='/mate/hot'><a className={link}>hot mate</a></Link></li>
            <li className={li}><Link href='/mate?id=terere' as='/mate/terere'><a className={link}>terere (cold mate)</a></Link></li>
          </ul>
        </nav>
    )
  }
}