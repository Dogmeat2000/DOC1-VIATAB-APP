package doc1.test.backend_viatab.model;

import jakarta.persistence.*;

@Entity
public class Story {
    @Id @GeneratedValue private Long id;
    @Column(nullable=false) private String title;
    @Column(columnDefinition="TEXT") private String content;
    @ManyToOne @JoinColumn(name="department_id", nullable=false)
    private Department department;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }
}
