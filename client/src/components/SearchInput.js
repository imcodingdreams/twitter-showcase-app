import React from 'react'

export const SearchInput = () => {
  return (
    <div>
      <p>
        Search for recent tweets of your favorite user.
      </p>
      <p>
        You can search by @username or keyword.
      </p>
      <form>
        <input type="search" />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}
