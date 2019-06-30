import {Navbar, NavbarGroup, NavbarHeading} from '@blueprintjs/core'
import * as React from 'react'
import {connect} from 'react-redux'

function Header(props: HeaderProps) {
  return (
    <Navbar>
      <NavbarGroup>
        <NavbarHeading>User Name</NavbarHeading>
      </NavbarGroup>
    </Navbar>
  )
}

type HeaderStateProps = {}
type RootState = {}
type HeaderProps = HeaderStateProps


const mapStateToProps = (state: RootState) => ({})

export default connect<HeaderStateProps,
  {},
  {},
  RootState>(
  mapStateToProps,
  {},
)(Header)
