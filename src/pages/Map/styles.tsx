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
  margin-top: 20px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; 
  width: 100%;
`;

export const Wrapper = styled.div`
  position: relative; 
  width: 50%;
`;

export const ClearIcon = styled.i`
  padding: 4px;
  position: absolute;
  box-sizing:border-box;
  top:50%;
  right:2px;
  transform: translateY(-50%);
  margin-right: 8px;
  color:#505050;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  border-radius: 25px 0 0 25px;
  padding: 10px 20px;
  height: 48px;
  width: 100%;
  border: 1px solid #333;
  outline: none;
  color: #505050;
`;

export const SearchButton = styled.button`
  border-radius: 0 25px 25px 0;
  padding: 0 16px 0 8px;
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

  @media (max-width: 760px) {
    span {
      display: none;
    }
  }
`;

export const LocateButton = styled.button`
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
`;

export const Suggestions = styled.ul`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  width: 100%; 
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 1000;
  color: #505050;
`;

export const SuggestionItem = styled.li`
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #f0f0f0;

  &:hover {
    background-color: #f7f7f7;
  }

  &:last-child {
    border-bottom: none;
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