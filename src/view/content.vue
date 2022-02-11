<template>
  <div>
    <h2 style="text-align:center;">ผลการเรียนตามอิงตามหลักสูตร MMIT 2557 IS</h2>

    <div style="margin-bottom:32px"></div>

    <div v-for="category in summaryCurriculum.categories">
      <table class="table" style="margin: 0">
        <thead>
          <tr style="border: 1px solid white">
            <th style="width: 70%; padding: 8px; border: 0">
              <h3 style="font-weight: bold; font-size: 24px">{{ category.name }}</h3>
            </th>
            <th style="width: 15%; font-size: 20px; border: 0">
              {{ category.totalCredit }} / {{ category.minimumCredit }}
            </th>
            <th style="width: 15%; border: 0">
              <complete-label :is-complete="category.isComplete"></complete-label>
            </th>
          </tr>
        </thead>
      </table>

      <div v-for="subCategory in category.subCategories">
        <table class="table" style="margin: 0">
          <thead>
            <tr style="background-color: white; border: 1px solid white;display:flex;align-items:start;justify-content:start;">
              <th style="width: 70%; padding: 0 8px; border: 0;display:flex;flex-direction:column">
                <h3 style="font-weight: bold; font-size: 18px">{{ subCategory.name }}</h3>
              </th>
              <th style="width: 15%; border: 0;display:flex;flex-direction:column">
                <p style="font-size:12px; color:gray;">Credits</p>
                <p>{{ subCategory.totalCredit }} / {{ subCategory.minimumCredit }}</p>
              </th>
              <th style="width: 15%; border: 0;display:flex;flex-direction:column">
                <p style="font-size:12px; color:gray;">Status</p>
                <complete-label :is-complete="subCategory.isComplete"></complete-label>
              </th>
            </tr>
          </thead>
        </table>

        <div v-for="innerSupCategory in subCategory.innerSubCategories">
          <table v-if="innerSupCategory.name" class="table" style="margin: 0">
            <thead>
              <tr style="background-color: white">
                <th style="width: 70%; padding: 0 8px; border: 0">
                  <h3 style="font-weight: bold; font-size: 16px">
                    {{ innerSupCategory.name }}
                  </h3>
                </th>
                <th style="width: 15%; border: 0">
                  {{ innerSupCategory.totalCredit }} /
                  {{ innerSupCategory.minimumCredit }}
                </th>
                <th style="width: 15%; border: 0">
                  <complete-label
                    :is-complete="innerSupCategory.isComplete"
                  ></complete-label>
                </th>
              </tr>
            </thead>
          </table>

          <table class="table table-striped table-hover" style="">
            <thead>
              <tr>
                <th style="width: 10%">Course No</th>
                <th style="width: 60%">Course Title</th>
                <th style="width: 15%"></th>
                <th style="width: 15%"></th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="course in innerSupCategory.courses"
                :style="[
                  course.status !== 'COMPLETED'
                    ? { color: '#e5e5e5' }
                    : { 'font-weight': '300' },
                ]"
              >
                <td>{{ course.code }}</td>
                <td>{{ course.name }}</td>
                <td>{{ course.credit }}</td>
                <td>{{ course.grade }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div>
      <table class="table" style="margin: 0">
        <thead>
          <tr style="background-color: white">
            <th style="width: 70%; padding: 0 8px; border: 0">
              <h3 style="font-weight: bold; font-size: 28px">Free Elective</h3>
            </th>
            <th style="width: 15%; border: 0">
              {{ summaryFreeElective.totalCredit }}/{{
                summaryFreeElective.minimumCredit
              }}
            </th>
            <th style="width: 15%; border: 0">
              <complete-label
                :is-complete="summaryFreeElective.isComplete"
              ></complete-label>
            </th>
          </tr>
        </thead>
      </table>

      <div>
        <table class="table table-striped table-hover" style="">
          <thead>
            <tr>
              <th style="width: 10%">Course No</th>
              <th style="width: 60%">Course Title</th>
              <th style="width: 15%"></th>
              <th style="width: 15%"></th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="course in summaryFreeElective.courses">
              <td>{{ course.code }}</td>
              <td>{{ course.name }}</td>
              <td>{{ course.credit }}</td>
              <td>{{ course.grade }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import curriculums from "@/data/study-plan.js";

export default {
  methods: {},
  data() {
    return {
      curriculums,
    };
  },
  computed: {
    enrolledCourses() {
      return this.$store.state.enrolledCourses;
    },
    currentCurriculum() {
      return this.curriculums[0];
    },
    curriculumCourses() {
      let courses = [];

      this.currentCurriculum.categories.forEach((category) => {
        category.subCategories.forEach((subCategory) => {
          subCategory.innerSubCategories.forEach((innerSubCategories) => {
            courses.push(...innerSubCategories.courses);
          });
        });
      });

      return courses;
    },

    freeElectiveCourses() {
      const enrolledCourseCodes = this.enrolledCourses.map((course) => course.code);
      const curriculumCourseCodes = this.curriculumCourses.map((course) => course.code);

      const freeElectiveCodes = enrolledCourseCodes.filter(
        (courseCode) => !curriculumCourseCodes.includes(courseCode)
      );

      return freeElectiveCodes
        .map((courseCode) =>
          this.enrolledCourses.find((course) => course.code == courseCode)
        )
        .filter((course) => !["W", "F"].includes(course.grade));
    },
    summaryFreeElective() {
      this.currentCurriculum.freeElective.courses = this.freeElectiveCourses.map(
        (freeElectiveCourse) => {
          const enrolledCourse = this.enrolledCourses.find(
            (enrolledCourse) => enrolledCourse.code == freeElectiveCourse.code
          );

          freeElectiveCourse.grade = enrolledCourse.grade;
          freeElectiveCourse.isComplete = true;

          return freeElectiveCourse;
        }
      );

      this.currentCurriculum.freeElective.totalCredit = this.currentCurriculum.freeElective.courses.reduce(
        (acc, course) => acc + course.credit,
        0
      );

      return this.currentCurriculum.freeElective;
    },
    summaryCurriculum() {
      const curriculum = this.currentCurriculum;

      for (
        let curriculumIndex = 0;
        curriculumIndex < curriculum.categories.length;
        curriculumIndex++
      ) {
        const category = curriculum.categories[curriculumIndex];

        for (
          let subCategoryIndex = 0;
          subCategoryIndex < category.subCategories.length;
          subCategoryIndex++
        ) {
          const subCategory = category.subCategories[subCategoryIndex];

          for (
            let innerSubCategoryIndex = 0;
            innerSubCategoryIndex < subCategory.innerSubCategories.length;
            innerSubCategoryIndex++
          ) {
            const innerSupCategory =
              subCategory.innerSubCategories[innerSubCategoryIndex];

            innerSupCategory.courses = innerSupCategory.courses.map(
              (curriculumCourse) => {
                const enrolledCourse = this.enrolledCourses.find(
                  (course) =>
                    course.code == curriculumCourse.code &&
                    !["W", "F"].includes(course.grade)
                );

                if (enrolledCourse !== undefined) {
                  return {
                    ...curriculumCourse,
                    grade: enrolledCourse.grade,
                    isComplete: true,
                    status: "COMPLETED",
                  };
                }

                return {
                  ...curriculumCourse,
                  isComplete: false,
                  status: "NOT_ENROLLED",
                };
              }
            );

            const totalCredit = innerSupCategory.courses
              .filter((course) => course.status == "COMPLETED")
              .reduce((acc, course) => acc + course.credit, 0);

            innerSupCategory.totalCredit = totalCredit;
            innerSupCategory.isComplete = totalCredit >= innerSupCategory.minimumCredit;
          }

          subCategory.totalCredit = subCategory.innerSubCategories.reduce(
            (acc, category) => acc + category.totalCredit,
            0
          );
          subCategory.isComplete = subCategory.totalCredit >= subCategory.minimumCredit;
        }

        category.totalCredit = category.subCategories.reduce(
          (acc, category) => acc + category.totalCredit,
          0
        );
        category.isComplete = category.totalCredit >= category.minimumCredit;
      }

      return curriculum;
    },
  },
};
</script>

<style>
.text-red-500 {
  color: red;
}

@import "../css/main.css";
</style>
