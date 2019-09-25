import styled from 'styled-components'

export const Container = styled.article`
  background-color: #fff;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
    
  margin-bottom: 15px;
`

export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;  
` 
export const CardHeaderInfo = styled.header`
  display: flex;
  align-items: center; 
` 
export const CardContent = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #333;
  margin-top: 15px;
  line-height: 1.4;
` 

export const Avatar = styled.img`
  border-radius: 50%;
  margin-right: 15px;
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500; 
  color: #2c3e50;
`