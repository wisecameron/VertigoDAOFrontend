import styled from 'styled-components'

export const PageContainer = styled.div`
    background: #0000;
    width: 100vw;
    height: 100vh;
    background: none;
    position: absolute;
    overflow: hidden;
`

export const DashboardContainer = styled.div`
    background: #313131;
    width: 60vw;
    height: 80vh;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    margin-left: 10vw;
    display: flex;
    flex-direction: column;
`

export const FeedContainer = styled.div`
    background: #212121;
    width: 17vw;
    height: 80vh;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    margin-left: 0vw;
    margin-top:  15vh;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`

export const Center = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const DashboardSectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 50vw;
    height: 25vh;
    background: #171717;
    border-radius: 30px;
    align-items: center;
`

export const Tag = styled.h1`
color: white;
font-size: 1.2vmax;

&:hover{
    color: grey;
  }
`

export const BalanceBoxContainer = styled.div`
  width: 15vw;
  height: 10vh;
  border-radius: 10px;
  background: #515151;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const LargeInnerDashboard = styled.div`
  width: 66vw;
  height: 50vh;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  background: #191919;
  margin-left: 5vw;
  margin-top: 16vh;
  justify-content: center;
  align-items: center;
  position: absolute;
`

export const ActionButton = styled.button`
  background: orange;
  color: black;
  border-radius: 4px;
  height: 6vh;
  cursor: pointer;
`

export const Connect = styled.button`
  background: #313131;
  color: white;
  border-radius: 4px;
  height: 6vh;
  cursor: pointer;
`

export const NoProfileContainer = styled.div`
  background: 
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const AdminDashboardContainer = styled.div`
  width: 50vw;
  height: 30vh;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #191919;
`
export const SmallDataField = styled.div`
  display: flex;
  flex-direction: column;
  width: 10vw;
  height: 14vh;
  border-radius: 10px;
  background: #515151;
`