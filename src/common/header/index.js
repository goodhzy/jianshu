import React from "react";
import { connect } from "react-redux";
import {actionCreators} from "./store"
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

const Header = (props) => {
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
            className={props.focused ? "active" : ""}
            onFocus={props.handleSearchFocus}
            onBlur={props.handleSearchBlur}
          ></NavSearch>
          <span className={props.focused ? "iconfont active" : "iconfont"}>
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
};

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    handleSearchFocus() {
      dispatch(actionCreators.searchFocus());
    },
    handleSearchBlur() {
      dispatch(actionCreators.searchBlur());
    },
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Header);
