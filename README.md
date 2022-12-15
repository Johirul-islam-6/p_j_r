# Getting Started with Create Dynamic WebSite Data lode.


01.This project create `React` site link or deatails : [ React App install](https://reactjs.org/docs/create-a-new-react-app.html).

02.This project was `tawilwnd` css with [tailwindcss install site link](https://tailwindcss.com/docs/installation).

03.This project was tawilwnd library `DaisyUi` with [ DaisyUi css install site link](https://daisyui.com/components/navbar/).

04.This project was backend data lode `Firebase` with [ Firebase Documention or install site link](https://console.firebase.google.com/).

05.This project was `Vercel` Server site Data with [Vercel install site link](https://vercel.com/dashboard).

06.This project was `GitHub push` Code Store Site  with [Github Repository create site link](https://github.com/).

---

# 🛠 Skills

* React js,
* JavaScript,
* Express.Js
* Firebase
* Vercel Server site
* Api Lode Data
* GitHub
* Css Library 
* Or Responsive
* etc.


## `01.Step will Create Font Design Or LayOut.`

I will create Layout Designe fully full responsive site.
or mining full name in [Side The Code](//http:). 

## `02.Authentication Security  in You Client Site.`
Authentication is a very important every client site.So that why I used
firebase Document stracture follo or apply authentication security [Firebase.com](https://console.firebase.google.com/) for more information. 

## `03.Daynamic Data Load`

I will Use Server site versel.com this site uplode my Server site file. or versel give at this datas link [versel Api Data Convert link ](https://web-technology-server-site.vercel.app/)

## `04.Server site Data Use Client site`

**Note: I will note every modiuls in web-programming Video or use assignment-10 !**

I will fetch(https://web-technology-server-site.vercel.app/) Data
```javaScript
  const [courses, setCourse] = useState([]);

  console.log(courses,"Data")

    useEffect(() => {
        //Server site respons
        fetch('https://web-technology-server-site.vercel.app/course')
            .then(result => result.json())
            .then(data => setCourse(data))

    }, [])

```
`or React hook (`Loader`) used Route Definetion`
```javaScript
  {
     path: '/courses/:id',
     element: <Course_Details></Course_Details>,
                loader: ({ params }) => fetc(`https://web-technology-server-site.vercel.app/course/${params.id}`)

            }

```
` Create router or privetRoute _`
```javaScript
  export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPages></ErrorPages>,
        children: [ 
             {
                path: '/chackout',
                element: (
                    //this is privetRoute Protection
                    <PrivetRoute>
                        <Cheakout></Cheakout>
                    </PrivetRoute>
                ) 
            }
        ]
    }
  )]

```
`or Catch than Loder Data another Pages _`
```javaScript
  {
      const singelCourse = useLoaderData()
      console.log(singelcourse, "datas comming another page")

            }

```

## `04.Step Conditional SteatMent ? true : false`

```javascript
   {
      user?.uid ?
          <Link to='/' onClick={LogoutBtn} id='logout' className='btn mx-4'>Log out</Link>
                :
                  <>
                     <Link to='/registration' className='btn ml-3 mr-2 lg:mx-5'>Registrar</Link>
                     <Link to='/login' className='btn mr-3'>Login</Link>
                  </>
                    
                    }
```
## `Or I will another Component etc. I mean say Hard work Is very importent is learning`

