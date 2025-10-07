"use client"
import AdminLayout from "@/components/AdminLayout"

const Admin : React.FC = () => {
    return(
        <AdminLayout
            current={1}
            currentUser={undefined}
        >
            <>
                <section className="grid place-items-center">
                    Admin Layout
                </section>
            </>
        </AdminLayout>
    )
}

export default Admin