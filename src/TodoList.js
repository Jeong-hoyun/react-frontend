import {Breadcrumb, Layout, Menu} from "antd/lib";
import React, { useState } from 'react';
import TimetoCheck from "./component/TimetoCheck";
import KmCheck from "./component/KmCheck"

const { Header, Content, Footer } = Layout;


const TodoList = () => {
  
const [index,setindex]=useState(0);  

const onSelect=(event)=>{
  console.log(event)
}
  
  return (
  <Layout className="layout">
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}   
        items={new Array(15).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `구미시 ${key}`,
          };
        })}
      />
    </Header>
    <Content
      style={{
        padding: '0 50px',
      }}
    >
      <Breadcrumb   style={{   margin: '16px 0',  }}   >
        <Breadcrumb.Item href="/">home</Breadcrumb.Item>
        <Breadcrumb.Item href="/list">List</Breadcrumb.Item>      
       </Breadcrumb> 
        <select onChange={onSelect}>
        <option value={TimetoCheck} ></option >
        <option value={KmCheck} ></option >  
       </select>
        </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >

    </Footer>
  </Layout>
)};

export default TodoList;