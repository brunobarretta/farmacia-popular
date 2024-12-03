import styled from "styled-components";

export const MapContainer = styled.div`
  height: calc(100vh - 72px);
  position: relative;
`;

export const SearchBar = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  .search-input {
    border-radius: 25px 0 0 25px;
    padding: 10px 20px;
    height: 48px;
    width: 50%;
    border: 1px solid #333;
    outline: none;
  }

  .search-button {
    border-radius: 0 25px 25px 0;
    padding: 0 16px;
    height: 48px;
    background-color: #333;
    color: white;
    border: 1px solid #333;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    i {
      margin-left: 8px;
    }
  }

  .locate-button {
    margin-left: 8px;
    padding: 0 16px;
    height: 48px;
    background-color: #333;
    color: white;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid white;
  }
`;

export const BottomBar = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;

  .info-box {
    padding: 10px 20px;
    height: 48px;
    background-color: #e53935;
    color: white;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid white;

    i {
      margin-right: 8px;
    }
  }
`;

export const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; 
  height: 100%; 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 20; 
`;