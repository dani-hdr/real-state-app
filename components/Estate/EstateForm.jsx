import { Formik, Form } from "formik";
import TextField from "../UI/Form/TextField";
import * as yup from "yup";
import Button from "./../UI/Button";
import Card from "./../UI/Card";
import TextAreaField from "./../UI/Form/TextAreaField";
import SelectField from "../UI/Form/SelectField";;
import { useState, useEffect } from "react";
import FileField from "./../UI/Form/FileField";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import {useRouter} from 'next/router'


const EstateForm = () => {
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([])
  const router = useRouter()
  useEffect(() => {
    const previews = Array.from(images).map(img=> URL.createObjectURL(img))
    setPreviewImages(previews)
   
  }, [images]);

  const submitSechma = yup.object().shape({
    price: yup.number("must be a number").required("required"),
    image: yup.mixed("must be a file").required("required"),
    region: yup
      .string("must be a region name")
      .max(20, "too long")
      .required("required"),
    city: yup
      .string("must be a city name")
      .max(20, "too long")
      .required("required"),
    address: yup
      .string("must be a address")
      .max(40, "too long")
      .required("required"),
    type: yup.string("must be a string").required("required"),
    forWhat: yup.string("must be a string").required("required"),
    rooms: yup.number("must be a number").required("required"),
    area: yup.number("must be a number").required("required"),
    bathrooms: yup.number("must be a number").required("required"),
    description: yup
      .string("must be a text")
      .max(400, "too long")
      .required("required"),
  });
  return (
    <Card>
      <Formik
        initialValues={{
          region: "",
          city: "",
          image: null,
          address: "",
          type: "",
          forWhat: "",
          area: 0,
          rooms: 0,
          bathrooms: 0,
          description: "",
          price: 0,
        }}
        onSubmit={(values) => {
          router.push('/')
          console.log(values);
        }}
        validationSchema={submitSechma}
      >
        {(props) => (
          <Form>
             <Swiper
            navigation={true}
            modules={[Navigation]}
            effect="cube"
            spaceBetween={0}
            slidesPerView={1}
          >
            {previewImages.map((img,index) => (
              <SwiperSlide key={index}>
                <Image
                  alt=""
                  className="w-full "
                  width={800}
                  height={400}
                  src={img}
                />
              </SwiperSlide>
            ))}
          </Swiper>
              
            <div className="flex flex-wrap items-baseline gap-2  justify-start">
              <TextField min="0" name="price" type="number" label="price" />
              <FileField
                name="image"
                type="file"
                accept="image/*"
                error={props.errors.image}
                multiple
                onChange={(e) => {
                  props.setFieldValue("image", e.currentTarget.files)
                  setImages(e.currentTarget.files)
                }
                 
                }
                label="image"
              />
             
              <TextField name="region" type="text" label="region" />
              <TextField name="city" type="text" label="city" />
              <TextField name="address" type="text" label="address" />
              <SelectField name="type" label="type">
                <option value="">select</option>
                <option value="house">house</option>
                <option value="apartment">apartment</option>
              </SelectField>
              <SelectField name="forWhat" label="For Sale/Rent">
                <option value="">select</option>
                <option value="For Sale">For Sale</option>
                <option value="For Rent">For Rent</option>
              </SelectField>
              <TextField min="0" name="area" type="number" label="area" />
              <TextField min="0" name="rooms" type="number" label="rooms" />
              <TextField
                min="0"
                name="bathrooms"
                type="number"
                label="bathrooms"
              />
              <TextAreaField
                rows="4"
                cols="50"
                name="description"
                label="description"
              />
            </div>
            <Button color="green" type="submit">
              submit
            </Button>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default EstateForm;
