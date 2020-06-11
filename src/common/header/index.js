import React, { Component } from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button,
} from "./style";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
    this.handleSearchFocus = this.handleSearchFocus.bind(this);
    this.handleSearchBlur = this.handleSearchBlur.bind(this);
  }
  render() {
    return (
      <HeaderWrapper>
        <Logo></Logo>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <NavItem className="right">登录</NavItem>
          <SearchWrapper>
            <NavSearch
              className={this.state.focused ? "active" : ""}
              onFocus={this.handleSearchFocus}
              onBlur={this.handleSearchBlur}
            ></NavSearch>
            <span
              className={this.state.focused ? "iconfont active" : "iconfont"}
            >
              &#xe633;
            </span>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <span className="iconfont">&#xe708;</span>
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
  handleSearchFocus() {
    this.setState({
      focused: true,
    });
  }
  handleSearchBlur() {
    this.setState({
      focused: false,
    });
  }
}

export default Header;
