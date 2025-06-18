package doc1.test.backend_viatab.repository;

import doc1.test.backend_viatab.model.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<Department,Long> {}
