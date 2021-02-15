import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { useFlexSearch } from 'react-use-flexsearch'
import { Formik, Form, Field } from 'formik'
  
const SearchBar = () => {
  const data = useStaticQuery(graphql`
      query BooksIndexQuery {
        localSearchBooksIndex {
          store
          index 
        }
      }
    `)
  const { index, store } = data.localSearchBooksIndex;
  const [query, setQuery] = useState(null)
  const results = useFlexSearch(query, index, store)

  return (
    <div>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setQuery(values.query)
          setSubmitting(false)
        }}
      >
        <Form>
          <Field name="query" />
        </Form>
      </Formik>
      <h1>Results</h1>
      <ul>
        {results.map(result => (
          <li key={result.id}>
            <Link to={result.slug}>{result.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchBar