export function SearchButtonHandler(
  userSearchOn: boolean,
  SetUserSearchOn: React.Dispatch<React.SetStateAction<boolean>>
) {
  SetUserSearchOn(userSearchOn ? false : true);

  document.addEventListener("mousedown", DeleteUserSearch);
  function DeleteUserSearch(event: any) {
    const $userSearch = document.getElementById("userSearch");
    const $searchButton = document.getElementById("searchButton");
    if (
      event.target !== $userSearch &&
      !$userSearch?.contains(event.target!) &&
      event.target !== $searchButton &&
      !$searchButton?.contains(event.target!)
    ) {
      console.log("!!");
      document.removeEventListener("mousedown", DeleteUserSearch);
      SetUserSearchOn(false);
    }
  }
}
