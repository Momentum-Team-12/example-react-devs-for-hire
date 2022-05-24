import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const Developer = ({
  name,
  expertise,
  gitHubName,
  setSelectedDev,
  isSelected,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [repos, setRepos] = useState([])

  const handleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${gitHubName}/repos`)
      .then((res) => {
        console.log(res.data)
        setRepos(res.data)
      })
    // axios.get('whatever-url').then(response => //do something with the response.data)
  }, [])

  return (
    <div className="dev" onClick={() => setSelectedDev(name)}>
      <p className="dev--name">{name}</p>
      {isExpanded ? (
        <>
          <FontAwesomeIcon
            icon={faCaretDown}
            className="font-icon"
            onClick={handleExpanded}
          />
          <p>Skills: {expertise}</p>
          <div className="repo-list">
            <ul>
              {repos.map((repo) => {
                return (
                  <li>
                    <a href={repo.html_url}>{repo.name}</a>
                  </li>
                )
              })}
            </ul>
          </div>
        </>
      ) : (
        <FontAwesomeIcon
          icon={faCaretRight}
          className="font-icon"
          onClick={handleExpanded}
        />
      )}
    </div>
  )
}

export default Developer
